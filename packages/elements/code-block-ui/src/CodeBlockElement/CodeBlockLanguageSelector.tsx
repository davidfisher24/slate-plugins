import * as React from 'react';
import { Select } from '@insendi/ui-kit';

export const CodeBlockLanguageSelector = ({
  language,
  handleLanguageChange
}: {
  language: string,
  handleLanguageChange: (language:string) => void
}) => {

  const handleChange = (
    event: any
  ) => {
    const { value } = event;
    handleLanguageChange(value)
  }

  return (
    <div style={{ position: 'absolute', top: '5px', right: '5px'}}>
      <Select
        name="languageCodeSelector"
        onChange={handleChange}
        contentEditable={false}
        isSize="small"
        title="Select coding language"
        value={language}
      >
        <option value="js">JavaScript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="r">R</option>
        <option value="sql">SQL</option>
      </Select>
    </div>
  );
};
