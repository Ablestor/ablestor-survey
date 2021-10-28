import { useState, InputHTMLAttributes, useRef, useEffect } from 'react';
import uniqid from 'uniqid';
import { StyledSelect, StyledInput, StyledOptionEditor } from './styled';
import { OptionEditorProps } from './type';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export const Select = (props: InputHTMLAttributes<HTMLSelectElement>) => {
  return <StyledSelect {...props} />;
};

export const OptionEditor = ({ items, onChange }: OptionEditorProps) => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    console.log(input);
  }, [input]);

  const appendItem = (value: string) => onChange([...items, { key: uniqid(), value }]);

  return (
    <StyledOptionEditor>
      {items.map(({ value }, index) => (
        <div key={index}>
          <Input placeholder={`옵션 ${index}`} value={value} />
        </div>
      ))}
      <div>
        <Input
          placeholder={'새로운 옵션 추가'}
          value={input}
          onChange={({ target }) => setInput(target.value)}
          onKeyUp={({ key }) => {
            if (key === 'Enter') {
              appendItem(input);
              setInput('');
              return;
            }
          }}
        />
      </div>
    </StyledOptionEditor>
  );
};
