import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';

import { EditorData } from '../data/dummy';

const Editor = () => {
  return (
    <div
      className='m-2 md:mx-5 md:mt-12 p-2 md:p-10 rounded-2xl bg-white'
    >
      <Header title='Editor' category='Utility' />
      <RichTextEditorComponent
        id='rich-text-editor'
      >
        <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor