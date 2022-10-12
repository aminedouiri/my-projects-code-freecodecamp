

export const Toolbar = (props) => {
    return (
      <div>
        <i class="fa-brands fa-free-code-camp"></i>
        {props.text}
        <i className="{props.icon}" onClick={props.onClick} />
      </div>
    );
  }
export const Editor = (props) => {
    return (
      <textarea
        id="editor"
        onChange={props.onChange}
        type="text"
        value={props.markdown}
      />
    );
  };