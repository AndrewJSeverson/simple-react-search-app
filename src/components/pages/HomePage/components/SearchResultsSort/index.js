import React from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import {
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { changeSortField } from '../../../../../redux/search/actions';
import styles from './styles';

const useStyles = makeStyles(styles);

const SearchResultsSortComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // redux state
  const { sortField } = useSelector((state) => state.search);

  const handleChangeSortField = (e) => {
    dispatch(changeSortField(e.target.value));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl} margin="dense">
      <InputLabel id="sort-by-label">
        Sort By
      </InputLabel>
      <Select
        labelId="sort-by-label"
        value={sortField}
        onChange={handleChangeSortField}
        labelWidth={50}
        inputProps={{
          margin: 'none',
          'data-testid': 'sort-select',
        }}
      >
        <MenuItem value="language">Language</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="relevance">Relevance</MenuItem>
      </Select>
    </FormControl>
  );
};

export default (SearchResultsSortComponent);
