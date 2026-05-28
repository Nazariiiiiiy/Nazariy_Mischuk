function SettingsPanel(props) {

  return (
    <div>

      <button onClick={props.changeTheme}>
        {props.text.theme}
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder={props.text.username}
        value={props.settings.username}
        onChange={props.changeUsername}
      />

      <br />
      <br />

      <select
        value={props.settings.language}
        onChange={props.changeLanguage}
      >
        <option value="ua">Українська</option>
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>

    </div>
  );
}

export default SettingsPanel;