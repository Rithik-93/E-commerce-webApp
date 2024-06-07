"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react"
import { addProduct } from "../../_actions/product";
import { useFormState, useFormStatus } from "react-dom";


export default function ProductForm() {

  const [priceInCents, setPriceInCents] = useState<number>();
  const [error, action] = useFormState(addProduct, {})
   return <form action={action} className="space-y-5">
    <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" 
        id="name" 
        required 
        name="name"></Input>
        {error?.name && <div className="text-destructive">{error?.name}</div>}
    </div>
    <div className="space-y-2">
        <Label htmlFor="priceInCents">Price in cents</Label>
        <Input type="Number" 
        id="priceInCents" 
        required 
        name="priceInCents"
        value={priceInCents}
        onChange={e=>setPriceInCents(Number(e.target.value) || undefined)}></Input>
        {error?.priceInCents && <div className="text-destructive">{error?.priceInCents}</div>}
    </div>
    <div className="text-muted-foreground">
       {formatCurrency((priceInCents || 0)/100)} 
    </div>
    <div className="space-y-2">
        <Label htmlFor="desc">Description</Label>
        <Input type="text" 
        id="desc" 
        required 
        name="desc"></Input>
        {error?.description && <div className="text-destructive">{error?.description}</div>}
    </div>
    <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" 
        id="file" 
        required 
        name="file"></Input>
        {error?.file && <div className="text-destructive">{error?.file}</div>}
    </div>
    <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" 
        id="image" 
        required 
        name="image"></Input>
        {error?.image && <div className="text-destructive">{error?.image}</div>}
    </div>
    <_SubmitButton/>
   </form>
}

function _SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="button" disabled={pending}>
            {pending ? "Saving..." : "Save"}
        </Button>
    )
}