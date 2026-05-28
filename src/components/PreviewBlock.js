function PreviewBlock(props) {

  return (
    <div style={{ marginTop: '30px' }}>

      <h2>Preview</h2>

      <p>
        {props.text.username}: {props.settings.username || '---'}
      </p>

      <p>
        {props.text.theme}: {' '}
        {props.settings.theme === 'light'
          ? props.text.light
          : props.text.dark}
      </p>

      <p>
        {props.text.language}: {props.settings.language}
      </p>

    </div>
  );
}

export default PreviewBlock;