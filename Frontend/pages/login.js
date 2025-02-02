import { Form } from '../components/form/index.js';
import { useState } from 'react';
import withAuth from '../components/isAuth';
import Router from 'next/router';

function Login() {
  const [activeTab, setActiveTab] = useState('admin');

  const handleTabClick = (e) => {
    setActiveTab(e.target.id);
  };

  const fields = [
    { name: 'id', label: 'ID', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  const handleSubmit = async (formData) => {
    const url =
      activeTab === 'admin'
        ? 'http://localhost/admin'
        : 'http://localhost/enroller';

    const data = {
      id: formData.id,
      password: formData.password,
    };

    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    const responseData = await response.json();
    if (responseData.error) {
      alert(responseData.error);
      return;
    }
    Router.push('/');
    // Do something with the response data, such as redirecting to another page or displaying an error message
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center p-4">
      <ul className="flex justify-center">
        <li className="mr-4">
          <button
            id="admin"
            className={`${
              activeTab === 'admin' ? 'bg-teal-400 text-white' : ''
            } font-bold text-lg rounded-full px-4 py-2`}
            onClick={handleTabClick}
          >
            Admin
          </button>
        </li>
        <li className="mr-4">
          <button
            id="enroller"
            className={`${
              activeTab === 'enroller' ? 'bg-teal-400 text-white' : ''
            } font-bold text-lg rounded-full px-4 py-2`}
            onClick={handleTabClick}
          >
            Enroller
          </button>
        </li>
      </ul>
      <Form fields={fields} submitText="Log In" onSubmit={handleSubmit} />
    </div>
  );
}

export default withAuth(Login);
