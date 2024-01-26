import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const LoginForm = () => {
  return (
    <div className="w-full max-w-2xl p-8 space-y-4 bg-black shadow-lg bg-opacity-80 rounded-xl backdrop-filter backdrop-blur-lg">
        <Tabs className="space-y-4" defaultValue="login" >
          <h1 className="text-4xl font-bold text-center text-white">Stock exchange simulator</h1>
          <TabsList className="grid w-full grid-cols-2 dark">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signin">Sign in</TabsTrigger>
          </TabsList>
          <div className="space-y-4">
            <TabsContent value="login">
              <Card>
                <CardHeader >
                  <CardTitle >Login</CardTitle>
                  <CardDescription>
                    Login to your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="name" defaultValue="username" className="text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" defaultValue="password" className="text-gray-500" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Login</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="signin">
              <Card>
                <CardHeader>
                  <CardTitle>Sign in</CardTitle>
                  <CardDescription>
                    Create your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="name" defaultValue="youremail@example.net" className="text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="name" defaultValue="username" className="text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" defaultValue="password" className="text-gray-500" />
                  </div>
                  
                </CardContent>
                <CardFooter>
                  <Button>Login</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
  )
}

export default LoginForm