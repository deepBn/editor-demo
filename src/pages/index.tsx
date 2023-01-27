import Head from 'next/head'
import classNames from '@/styles/index.module.css';
import dynamic from 'next/dynamic';
import CodeMirrorComponent from '@/components/codeMirror/codeMirror.component';

const AceEditorComponent = dynamic(() => import('@/components/aceEditor/aceEditor.component'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Editor Example</title>
        <meta name="description" content="Different types of editor demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ minHeight: '100vh' }}>
        <div style={{ display: 'flex' }}>
          <div className={classNames.editorContainer}>
            <CodeMirrorComponent />
          </div>
          <div className={classNames.editorContainer}>
            <AceEditorComponent />
          </div>
        </div>
      </main>
    </>
  )
}
