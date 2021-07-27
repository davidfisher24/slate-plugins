import * as React from 'react';

export const CodeBlockLanguageSelector = ({
  language,
  handleLanguageChange
}: {
  language: string,
  handleLanguageChange: (language:string) => void
}) => {

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    const { value } = event.target;
    handleLanguageChange(value)
  }

  return (
    <div style={{ position: 'absolute', top: '5px', right: '5px'}}>
      <select
        name="languageCodeSelector"
        onChange={handleChange}
        contentEditable={false}
        value={language}
      >
        <option value="js">JavaScript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="r">R</option>
        <option value="sql">SQL</option>
      </select>
    </div>
  );
};
