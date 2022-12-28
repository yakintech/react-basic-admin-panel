import React from 'react'
import { useFormik } from 'formik';
import { network } from '../../../network/network';
import * as Yup from 'yup';


function AddCategory() {

    const addCategoryValidationSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Lütfen bir kategori adı giriniz'),

        description: Yup.string()
          .min(2, 'Too Short!')
          .required('Required')
      });


    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        validationSchema:addCategoryValidationSchema,
        onSubmit: values => {
            network.add('/categories', values)
                .then(res => {
                    alert('Success!');
                })
        },
    });



    return (<>
        <form onSubmit={formik.handleSubmit}>
            {
                formik.errors.name && <span>{formik.errors.name}</span>
            }
            <div>
                <label>Name</label>
                <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div>
                <label>Description</label>
                <input type='text' name='description' onChange={formik.handleChange} value={formik.values.description} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>
    )
}

export default AddCategory