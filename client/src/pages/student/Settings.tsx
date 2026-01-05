import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Lock, User, Mail } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl">
      <div>
        <h1 className="text-3xl font-heading font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account preferences and profile</p>
      </div>

      <div className="grid gap-8">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><User className="size-5" /> Profile Information</CardTitle>
            <CardDescription>Update your personal details and public profile.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="size-20 border border-border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Avatar</Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Student" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="User" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" defaultValue="Passionate learner and developer." />
            </div>
            
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2"><Bell className="size-5" /> Notifications</CardTitle>
             <CardDescription>Configure how you receive alerts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Course Updates", desc: "Receive emails about new content in your enrolled courses." },
              { title: "Assignment Reminders", desc: "Get notified 24 hours before a deadline." },
              { title: "Promotional Emails", desc: "Receive offers and new course recommendations." }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">{item.title}</Label>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked={i !== 2} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2"><Lock className="size-5" /> Security</CardTitle>
             <CardDescription>Manage your password and account security.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label>New Password</Label>
                 <Input type="password" />
               </div>
               <div className="space-y-2">
                 <Label>Confirm New Password</Label>
                 <Input type="password" />
               </div>
            </div>
            <div className="flex justify-end mt-4">
               <Button variant="outline">Update Password</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
