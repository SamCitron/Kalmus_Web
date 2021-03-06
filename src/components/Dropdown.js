import React, { useState } from 'react';
import { Button } from '@mui/material';
import {
  Autocomplete,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

// List of movies that are currently in available in our json_barcodes folder
// The name is what the user will see and type in their dropdown, the value is what alligns to the .json file's substring
const movies = [
  { name: 'Mission Impossible', value: 'mission_impossible' },
  { name: 'Ratatouille', value: 'ratatouille' },
  { name: 'Chungking Express', value: 'Chungking_Express' },
  { name: 'I Am Love', value: 'I_Am_Love' },
  { name: 'i Robot', value: 'i_robot' },
  { name: 'Playtime', value: 'Playtime' },
  { name: 'Vergigo', value: 'Vertigo' },
];

export default function Dropdown(props) {
  /**
   * React JS interface for user's dropdown. Includes one autocomplete dropdown for selecting the titles of movies, and two set dropdown menus for Color Metric and Frame Type.
   * This works and passes the user's input to App.js sucessfully.
   */

  // Set up our react hooks
  const [movie, setMovie] = useState(null);
  const [colorMetric, setColorMetric] = useState('');
  const [frameType, setFrameType] = useState('');

  return (
    <div>
      {/*The autocomplete component from materialUI*/}
      <Autocomplete
        id='select-movie'
        options={movies}
        sx={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label='Search For A Film' />
        )}
        getOptionLabel={(option) => option.name}
        value={movie}
        onChange={(_event, newMovie) => {
          console.log(newMovie);
          setMovie(newMovie);
        }}
      />

      <FormControl fullWidth>
        {/*Dropdown menu from materialUI*/}
        <InputLabel id='select-color-metric'>Select Color Metric</InputLabel>
        <Select
          labelId='select-color-metric'
          id='select-color-metric'
          sx={{ width: 400 }}
          value={colorMetric}
          label='Color Metric'
          onChange={(event) => {
            console.log(event.target.value);
            setColorMetric(event.target.value);
          }}
        >
          <MenuItem value='Average'>Average</MenuItem>
          <MenuItem value='Median'>Median</MenuItem>
          <MenuItem value='Mode'>Mode</MenuItem>
          <MenuItem value='Top-dominant'>Top Dominant</MenuItem>
          <MenuItem value='Weighted-dominant'>Weighted Dominant</MenuItem>
          <MenuItem value='Bright'>Bright</MenuItem>
          <MenuItem value='Brightest'>Brightest</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        {/*Dropdown menu from materialUI*/}
        <InputLabel id='select-frame-type'>Select Frame Type</InputLabel>
        <Select
          labelId='select-frame-type'
          id='select-frame-type'
          sx={{ width: 400 }}
          value={frameType}
          label='Frame Type'
          onChange={(event) => {
            console.log(event.target.value);
            setFrameType(event.target.value);
          }}
        >
          <MenuItem value='Whole_frame'>Whole Frame</MenuItem>
          <MenuItem value='Low_contrast_region'>Low Contrast Region</MenuItem>
          <MenuItem value='High_contrast_region'>High Contrast Region</MenuItem>
          <MenuItem value='Foreground'>Forground</MenuItem>
          <MenuItem value='Backgroundt'>Background</MenuItem>
        </Select>
      </FormControl>

      {/*Submit button that triggers props to get passed back to App.js*/}
      <Button
        variant='contained'
        onClick={() =>
          props.generateImage({
            movieTitle: movie.value,
            colorMetric: colorMetric,
            frameType: frameType,
          })
        }
      >
        Submit
      </Button>
    </div>
  );
}
