import { Component } from "react";
import { placeholder } from "./placeholder";
import {Toolbar, Editor} from "./utils";
import * as marked from 'marked';
import {Prism} from 'prismjs';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

export const renderer = new marked.Renderer();
renderer.link = function ( href, title, text){
  return `<a target="_blank" href="${href}">${text}</a>`;
}
const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
      id="preview"
    />
  );
};
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMax = this.handleEditorMax.bind(this);
    this.handlePreviewMax = this.handlePreviewMax.bind(this);

  }

  handleChange(e){
    this.setState({
      markdown: e.target.value
    });
  }

  handleEditorMax(){
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }

  handlePreviewMax(){
    this.setState({
      previewMaximized: !this.state.previewMaximized
    })
  }
  render(){
    const selectors = 
    this.state.editorMaximized ? 
    ['editorDiv maximized', 'previewDiv hide', 'fa-solid fa-minimize']
    :this.state.previewMaximized ? 
    ['previewDiv maximized', 'editorDiv hide', 'fa-solid fa-minimize']
    :['editorDiv', 'previewDiv', 'fa-solid fa-fa-maximize'];


    return(<div>
      <div className={selectors[0]}>
      <Toolbar icon={selectors[2]} onClick={this.handleEditorMax} text="Editor" />
      <Editor markdown={this.state.markdown} onChange={this.handleChange} />
      </div>
      <div className="converter" />
      <div className={selectors[1]}>
      <Toolbar icon={selectors[2]} onClick={this.handlePreviewMax} text="Preview"/>
      <Preview markdown={this.state.markdown} />
      </div>
    </div>);

  }
}

export default App;
