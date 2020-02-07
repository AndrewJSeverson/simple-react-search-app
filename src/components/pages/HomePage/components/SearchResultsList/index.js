import React from 'react';
import { sortBy } from 'lodash';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  makeStyles,
  CardMedia,
  CardContent,
  Typography,
  Card,
  Grid,
  Chip,
  withWidth,
} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const SearchResultsListComponent = (props) => {
  const { width } = props;
  const classes = useStyles();

  // redux state
  const { searchResults } = useSelector((state) => state.search);

  return (
    <Grid item xs={12}>
      {
        sortBy(searchResults, ['name']).map((show) => (
          <Card className={classes.root} key={show.id}>
            <Grid item container className={classes.gridItem}>
              <Grid item xs={12} sm={8} md={9}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {show.name} <Typography variant="caption" className={classes.languageText}>({show.language})</Typography>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {show.summary
                        ? show.summary.replace(/<[^>]*>?/gm, '')
                        : ''}
                    </Typography>
                    {
                      (!!show.genres && show.genres.length > 0)
                      && (
                        <div className={classes.section}>
                          <Typography variant="subtitle1">Genres</Typography>
                          {show.genres.map((g) => <Chip key={show.id + g} className={classes.genreChip} size="small" label={g} />)}
                        </div>
                      )
                    }
                    {
                      !!show.officialSite
                      && (
                        <div className={classes.section}>
                          <Typography variant="subtitle1">Website</Typography>
                          <a href={show.officialSite} target="blank">{show.officialSite}</a>
                        </div>
                      )
                    }
                  </CardContent>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                className={classes.imageContainer}
                container
                justify={width === 'xs'
                  ? 'center'
                  : 'flex-end'}
              >
                {(show.image && show.image.medium)
                  ? (
                    <CardMedia
                      className={classes.media}
                      image={(show.image && show.image.medium)
                        ? show.image.medium
                        : ''}
                      title={`${show.name} poster image`}
                    />
                  )
                  : <Typography variant="caption">No show image</Typography> }
              </Grid>
            </Grid>
          </Card>
        ))
      }
    </Grid>
  );
};

export default withWidth()(SearchResultsListComponent);

SearchResultsListComponent.propTypes = { width: PropTypes.string };

SearchResultsListComponent.defaultProps = { width: 'sm' };
