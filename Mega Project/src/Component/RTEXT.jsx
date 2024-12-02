import React from 'react';
import {Editor} from 'tinymce'
import { Controller } from 'react-hook-form';


function RTEXT({name, control, label, defaultValue= "" }) {

    return (
        <div className='w-full'>
            {label && <label>{label} </label>}
            <Controller
            name = {name || "Content"}
            control = {control}
            render={({field: {onChange}})=>(
                <Editor
                initialValue = {defaultValue}
                 init={{
                    initialValue: defaultValue, 
                    height: 500,
                    menubar: true,
                    plugins: [
                        'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                        'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                        'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
                     ],
                     toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                     content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                 }} onEditorChange= {onChange} />
            )}
            />
            
        </div>
    );
}

export default RTEXT;