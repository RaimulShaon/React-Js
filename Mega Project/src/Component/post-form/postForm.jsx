import React, { useCallback } from 'react';
import RTEXT from '../RTEXT';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import dataServices from '../../appwrite/configData';
import { useSelector } from 'react-redux';




export default function PostForm({post}) {
   const {register, handleSubmit, watch, control, setValue, getValues}= useForm({
    defaultValues: {
        title: post?.title || '' ,
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active"
        }
    })
    const navigate= useNavigate()
    const selectData = useSelector((state)=> state.auth.selectData)
    
    const submit = async (data)=>{
        if (post) {
            const file =data.image[0]? await dataServices.crateData(data.image[0]): null;
            if (file) {
                dataServices.deleteFile(post.featureImg)
            }

            const postData = await dataServices.updateData(post.$id, {...data, featureImg: file? file.$id: undefined })
            if (postData) {
                navigate(`/post${postData.$id}`)
            }
        } else {
            const file = await dataServices.crateData(data.image[0])
            if (file) {
                 const fileId= file.$id
                 data.featureImg = fileId 
                 const DBpost= await dataServices.crateData({...data, userId: selectData.$id})
                 if (DBpost) {
                    navigate(`/post${DBpost.$id}`)
                 }
            }
        }
    }

    const transform = useCallback((value)=>{
        if (value && typeof value === "string") {
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");   
        }
        return ""
    }, [])

    React.useEffect(()=>{
        const subscription = watch((value, {name})=>{
            if (name === "title") {
                setValue("slug", transform(value.title), {shouldValidate:true})
            }
        })

        return ()=>{
            subscription.unSubscribe()
        }
    }, [watch, transform, setValue])
    
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", transform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTEXT label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={dataServices.getFilePreview(post.featuredImg)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
