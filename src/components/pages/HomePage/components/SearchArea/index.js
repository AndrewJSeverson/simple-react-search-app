import React, { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  makeStyles,
  Paper,
  InputBase,
  IconButton,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { searchTvShows } from '../../../../../redux/search/actions';

import styles from './styles';

const useStyles = makeStyles(styles);

const SearchAreaComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // local state
  const [searchText, setSearchText] = useState('');
  const [searchedText, setSearchedText] = useState(null);

  // redux state
  const {
    isSearching, isEmptySearch,
  } = useSelector((state) => state.search);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  /*
    Another approach to searching would be for auto search
    with debouncing. This method will auto fetch results
    after the user finishes typing so they won't have to press
    enter or the submit button. Ultimately the decision
    should be decided by UX preference.
  */
  const handleSearch = () => {
    const currentSearchText = searchText;
    setSearchedText(currentSearchText);
    setSearchText('');
    dispatch(searchTvShows(currentSearchText.trim()));
  };

  const keyPress = (e) => {
    // 13 is the enter key press code
    if (e.keyCode === 13 && searchText.length > 0) {
      handleSearch();
    }
  };

  return (
    <div>
      <Paper className={classes.root}>
        <InputBase
          autoFocus
          className={classes.input}
          placeholder="Search TV Shows"
          inputProps={{
            'aria-label': 'search tx shows',
            'data-testid': 'search-input',
          }}
          value={searchText}
          onKeyDown={keyPress}
          onChange={handleSearchTextChange}
          disabled={isSearching}
          data-testid="search-text-box"
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={handleSearch}
          disabled={searchText.length === 0 || isSearching}
          data-testid="search-button"
        >
          { isSearching
            ? <CircularProgress data-testid="loading-icon" size={20} />
            : <SearchIcon data-testid="search-icon" />}
        </IconButton>
      </Paper>
      {
        !!searchedText
          && (
            <Typography noWrap variant="caption" component="div" className={classes.showingText}>
              {isEmptySearch
                ? 'No'
                : 'Showing'} results for <b>{searchedText}</b>
            </Typography>
          )
      }
    </div>
  );
};

export default SearchAreaComponent;
