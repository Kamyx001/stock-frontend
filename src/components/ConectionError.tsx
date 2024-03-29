import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useEffect, useState } from "react";
 
export function ConectionError() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 3000)
    }, []);
  if (loading) {
    return (
      <></>
    )
  }
  return (
    <Alert variant="destructive" className="fixed dark w-96 bottom-5 right-5">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Can't connect to server
      </AlertDescription>
    </Alert>
  )
}