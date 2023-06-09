import {
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import FormTextFieldInput from './FormTextFieldInput';

export default function FormTextFieldWithRadio(props) {
  const {
    id,
    label,
    showTitleLabel,
    value,
    setValue,
    type,
    radioGroups,
    radioSelection, setRadioSelection,
    radioLabel,
    half,
    required,
  } = props;

  return (
    <>
      <FormTextFieldInput
        id={id}
        label={label}
        showTitleLabel={showTitleLabel}
        half
        value={value}
        setValue={setValue}
        type={type}
        endAdornment={radioSelection}
        customTextFieldGridSize={half ? 3 : 0}
        required={required}
      />
      <Grid item xs={12} sm={half ? 3 : 6}>
        <FormControl>
          {radioLabel
            && <FormLabel id={`${id}-row-radio-buttons-group-label`}>{radioLabel}</FormLabel>}
          <RadioGroup
            row
            name={`${id}row-radio-buttons-group`}
            aria-labelledby={`${id}-row-radio-buttons-group-label`}
            value={radioSelection}
            onChange={(e) => setRadioSelection(e.target.value)}
          >
            {radioGroups.map((val) => (
              <FormControlLabel
                value={val}
                control={<Radio />}
                label={val}
                key={val}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );
}

FormTextFieldWithRadio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showTitleLabel: PropTypes.bool,
  radioLabel: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  radioGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  half: PropTypes.bool,
  radioSelection: PropTypes.string.isRequired,
  setRadioSelection: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

FormTextFieldWithRadio.defaultProps = {
  type: 'number',
  showTitleLabel: true,
  radioLabel: null,
  value: null,
  half: false,
  required: false,
};
