import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  Box,
} from "@mui/material";
import theme from "@/styles/styles";

// Define validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  education: yup.string().required("Education is required"),
  nationalCode: yup
    .string()
    .required("National code is required")
    .matches(/^\d{10}$/, "National code must be 10 digits"),
});

const educationOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

const FormWithValidation: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
      px={20}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width={"100%"} my={2}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div dir="rtl">
              <TextField
                {...field}
                fullWidth
                label="نام"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
              </div>
            )}
          />
        </Box>
        <Controller
          name="نام"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <br />

        <FormControl variant="outlined" fullWidth error={!!errors.education}>
          <InputLabel>Education</InputLabel>
          <Controller
            name="education"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select {...field}>
                {educationOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.education && <span>{errors.education.message}</span>}
        </FormControl>
        <br />

        <Controller
          name="nationalCode"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="National Code"
              variant="outlined"
              error={!!errors.nationalCode}
              helperText={errors.nationalCode?.message}
            />
          )}
        />
        <br />

        <FormControl component="fieldset" error={!!errors.status}>
          <RadioGroup
            row
            name="status"
            defaultValue="on"
            onChange={(e) => e.target.value}
          >
            <FormControlLabel value="on" control={<Radio />} label="On" />
            <FormControlLabel value="off" control={<Radio />} label="Off" />
          </RadioGroup>
          {errors.status && <span>{errors.status.message}</span>}
        </FormControl>
        <br />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormWithValidation;
