'use client'
 
import { useFormStatus } from 'react-dom'
import Button from './Button'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <Button type="submit" aria-disabled={pending}>Inscription</Button>
  )
}