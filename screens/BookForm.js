import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";

const ReviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(3),
  author: yup
    .string()
    .required()
    .min(8),
  notes: yup
    .string()
    .required()
    .min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Please add a rating between 1 and 5.", value => {
      return parseInt(value) < 6 && parseInt(value) > 0;
    })
});

export default BookForm = ({ addBook }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          author: "",
          rating: "",
          notes: ""
        }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addBook(values);
        }}
      >
        {formikprops => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Book title"
              onChangeText={formikprops.handleChange("title")}
              value={formikprops.values.title}
              onBlur={formikprops.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {formikprops.touched.title && formikprops.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Book author"
              onChangeText={formikprops.handleChange("author")}
              value={formikprops.values.author}
              onBlur={formikprops.handleBlur("author")}
            />
            <Text style={globalStyles.errorText}>
              {formikprops.touched.author && formikprops.errors.author}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="My notes about the book"
              onChangeText={formikprops.handleChange("notes")}
              value={formikprops.values.notes}
              onBlur={formikprops.handleBlur("notes")}
            />
            <Text style={globalStyles.errorText}>
              {formikprops.touched.notes && formikprops.errors.notes}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={formikprops.handleChange("rating")}
              value={formikprops.values.rating}
              keyboardType="numeric"
              onBlur={formikprops.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {formikprops.touched.rating && formikprops.errors.rating}
            </Text>
            <Button
              title="Submit"
              color="maroon"
              onPress={formikprops.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
