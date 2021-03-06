import React from 'react'
import Head from 'next/head'
const Form = () => {
  return (
      <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                <title>💡 Agendamento de horários</title>

                 <style type="text/css">
                     {'html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } '}
                 </style>
        </Head>

    <iframe id="typeform-full" width="100%" height="100%" frameBorder="0"
    allow="camera; microphone; autoplay; encrypted-media;"
    src="https://form.typeform.com/to/K6f1cvsW?typeform-medium=embed-snippet"/>
    <script type="text/javascript" src="https://embed.typeform.com/embed.js"/>
    </>
  )
}

export default Form
