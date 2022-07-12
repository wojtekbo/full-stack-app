import React from 'react';

import ModernDatepicker from 'react-modern-datepicker';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

import {useForm} from 'react-hook-form';

const PostForm = ({action, actionText, ...post}) => {
  const {
    register,
    handleSubmit: validate,
    formState: {errors},
  } = useForm();
  const [title, setTitle] = useState(post.title || '');
  const [content, setContent] = useState(post.content || '');
  const [publishedDate, setPublishedDate] = useState(post.publishedDate || new Date());
  const [price, setPrice] = useState(post.price || '');
  const [localization, setLocalization] = useState(post.localization || '');
  const [phone, setPhone] = useState(post.phone || '');
  const [user, setUser] = useState(post.user || '');
  const [publishedDateError, setPublishedDateError] = useState(false);

  const onSubmit = () => {
    setPublishedDateError(!publishedDate);
    if (publishedDate) {
      action({title, content, publishedDate, price, localization, user, phone, status: 'published'});
    }
  };

  return (
    <div>
      <Form onSubmit={validate(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control {...register('title', {required: true, minLength: 10, maxLength: 50})} value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
          {errors.title && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control {...register('content', {required: true, minLength: 20, maxLength: 1000})} value={content} onChange={e => setContent(e.target.value)} type="text" placeholder="Enter content" />
          {errors.content && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <ModernDatepicker className="border border-1" date={publishedDate} format={'YYYY-MM-DD'} showBorder onChange={date => setPublishedDate(new Date(date))} placeholder={'Select a date'} />
          {publishedDateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control {...register('price', {required: false})} value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Enter price" />
          {errors.price && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Localization</Form.Label>
          <Form.Control {...register('localization', {required: false})} value={localization} onChange={e => setLocalization(e.target.value)} type="text" placeholder="Enter localization" />
          {errors.localization && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control {...register('phone', {required: false})} value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Enter phone number" />
          {errors.phone && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Login</Form.Label>
          <Form.Control {...register('user', {required: true})} value={user} onChange={e => setUser(e.target.value)} type="text" placeholder="Enter user" />
          {errors.user && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
