import {
  Grid, Button,
} from '@mui/material';
import _ from 'lodash';
import React, { useState } from 'react';

import Form from './Forms/Form';
import FormDatePicker from './Forms/FormDatePicker';
import FormSelect from './Forms/FormSelect';
import FormTextFieldInput from './Forms/FormTextFieldInput';
import FormTextFieldWithRadio from './Forms/FormTextWithRadio';
import { convertInchesToCm, convertLbToKg } from '../../util';

export default function BasicInfoForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const clear = () => {
    setFirstName('');
    setLastName('');
    setBirthDate(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      'firstName: ': firstName,
      'lastName: ': lastName,
      'birthDate: ': birthDate,
      'gender: ': gender,
      'weight: ': weight,
      'height: ': height,
    });

    clear();
  };

  const genders = [
    'Female',
    'Male',
    'Non-binary',
    'Prefer not to say',
    'Other',
  ];

  return (
    <Form
      handleSubmit={handleSubmit}
      formTitle="Update Basic Profile"
    >
      <FormTextFieldInput
        id="first-name"
        label="First Name"
        half
        value={firstName}
        setValue={setFirstName}
      />
      <FormTextFieldInput
        id="last-name"
        label="Last Name"
        half
        value={lastName}
        setValue={setLastName}
      />
      <FormDatePicker
        half
        id="birthdate"
        label="Born"
        setValue={setBirthDate}
        value={birthDate}
      />
      <FormSelect
        half
        id="gender"
        label="Gender"
        options={genders}
        setValue={setGender}
        value={gender}
      />
      <FormTextFieldWithRadio
        id="weight"
        label="Weight"
        value={weight}
        setValue={setWeight}
        type="number"
        radioGroups={['kg', 'lb']}
        conversionFunctions={[_.noop, convertLbToKg]}
      />
      <FormTextFieldWithRadio
        id="height"
        label="Height"
        value={height}
        setValue={setHeight}
        type="number"
        radioGroups={['cm', 'inch']}
        conversionFunctions={[_.noop, convertInchesToCm]}
      />
      <Grid item xs={12} sm={6} />
      <Grid item xs={12} sm={5} />
      <Grid item xs={12} sm={4}>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Grid>
      <Grid item xs={12} sm={5} />
    </Form>

  );
}
