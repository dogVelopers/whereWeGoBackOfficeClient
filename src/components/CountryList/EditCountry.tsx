import React, { useState } from 'react';
import { StringLiteral } from 'typescript';

interface ICountryFormProps {
  onSubmit: (form: {
    image_url: string;
    nation_name: string;
    continent_name: string;
    introduce: string;
    quarantine_policy: string;
  }) => void;
}

export const EditCountry = ({ onSubmit }: ICountryFormProps) => {
  const [form, setForm] = useState({
    image_url: '',
    nation_name: '',
    continent_name: '',
    introduce: '',
    quarantine_policy: '',
  });

  const {
    image_url,
    nation_name,
    continent_name,
    introduce,
    quarantine_policy,
  } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      image_url: '',
      nation_name: '',
      continent_name: '',
      introduce: '',
      quarantine_policy: '',
    }); // 초기화};
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="img" value={image_url} onChange={onChange} />
      <input name="nation" value={nation_name} onChange={onChange} />

      <input name="continent" value={continent_name} onChange={onChange} />
      <input name="introduce" value={introduce} onChange={onChange} />
      <input
        name="quarantinePolicy"
        value={quarantine_policy}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
};
