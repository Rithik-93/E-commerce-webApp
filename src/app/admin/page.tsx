import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";


export default function AdminDashboard() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       <_Dashboard title="title" 
       subtitle="subtitle" 
       body="body" />
  </div>)
}

type DashboardProps = {
    title: string,
    subtitle: string,
    body: string
}

function _Dashboard({title, subtitle, body}:DashboardProps) {
   return<div>  
   <Card>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
    <CardContent>
        <p>{body}</p>
    </CardContent>
   </Card>
   </div> 
}