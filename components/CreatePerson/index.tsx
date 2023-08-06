import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  FormLabel,
} from "@mui/material";
import { isNationalIdValid } from "@/utils/isNationalCodeValid";
import CustomButton from "../CustomButton";
import { useApi } from "@/hook";
import { CreatePersonProps, FormValues } from "@/types";
import Loading from "../Loading";
import { toast } from "react-toastify";
import { BlurOverlayContainer, TableWrapper } from "@/styles/styles";

// Define validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required("نام نمی تواند خالی باشد."),
  lastName: yup.string(),
  education: yup.string().required("تحصیلات نمی تواند خالی باشید"),
  nationalCode: yup
    .string()
    .test("valid-national-code", "کدملی شما نامعتبر است", (value) => {
      return isNationalIdValid(value);
    })
    .required("لطفا کد ملی خود را وارد نمایید."),
  status: yup.boolean().required("Status is required"),
});

const educationOptions = [
  "زیر دیپلم",
  "دیپلم",
  "لیسانس",
  "فوق لیسانس",
  "دکتری",
];

const CreatePerson = ({ updatePersonsList }: CreatePersonProps) => {
  const { error, isSuccess, loading, sendRequest } = useApi();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    await sendRequest("POST", "/api/persons", data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("کاربر جدید با موفقیت ساخته شد");
      //update list after add new person
      updatePersonsList();
    }
    if (error) {
      toast.error("متاسفانه خطایی رخ داده است");
    }

    return;
  }, [error, isSuccess]);

  return (
    <TableWrapper>
      {loading && (
        <BlurOverlayContainer>
          <Loading />
        </BlurOverlayContainer>
      )}
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
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
        <Box width={"100%"} my={2}>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div dir="rtl">
                <TextField
                  {...field}
                  label="نام خانوادگی"
                  variant="outlined"
                  fullWidth
                />
              </div>
            )}
          />
        </Box>
        <Box width={"100%"} my={2}>
          <Controller
            name="nationalCode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div dir="rtl">
                <TextField
                  {...field}
                  fullWidth
                  label="کدملی"
                  variant="outlined"
                  error={!!errors.nationalCode}
                  helperText={errors.nationalCode?.message}
                />
              </div>
            )}
          />
        </Box>
        <Box width={"100%"} my={2}>
          <FormControl variant="outlined" fullWidth error={!!errors.education}>
            <InputLabel>تحصیلات</InputLabel>
            <Controller
              name="education"
              control={control}
              defaultValue="لیسانس"
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
            {errors.education && (
              <Typography variant="caption" color="error">
                {errors.education.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        <Box width={"100%"} my={2} sx={{ display: "flex" }}>
          <FormLabel sx={{ mt: 1 }} component="legend">
            وضعیت
          </FormLabel>
          <Controller
            name="status"
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <RadioGroup
                {...field}
                sx={{ mx: "30px", display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="فعال"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="غیرفعال"
                />
              </RadioGroup>
            )}
          />
          {errors.status && <p>{errors.status.message}</p>}
        </Box>

        <CustomButton
          title="ایجاد کاربر"
          type="submit"
          size="large"
          styles={{ width: "100%" }}
          disabled={Object.keys(errors).length > 0 || loading}
        />
      </form>
    </TableWrapper>
  );
};

export default CreatePerson;
