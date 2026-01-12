import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Pencil } from "lucide-react";

export default function Settings() {
  const [gender, setGender] = useState("male");

  return (
    <div className="animate-in fade-in duration-500" data-testid="page-settings">
      <div className="flex gap-8">
        <div className="w-64 shrink-0">
          <div className="sticky top-24">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-1">Logged in as</p>
              <h3 className="font-semibold text-lg text-foreground">Student User</h3>
            </div>
            
            <nav className="space-y-1">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-colors"
                data-testid="nav-profile"
              >
                <User className="size-5" />
                Profile
              </button>
            </nav>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <Card className="border-border/60 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h1 className="text-2xl font-heading font-bold text-foreground mb-8" data-testid="heading-profile">
                Profile
              </h1>

              <div className="flex flex-col items-center mb-10">
                <div className="relative mb-4">
                  <Avatar className="size-28 border-4 border-border">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                    <AvatarFallback className="text-2xl">SU</AvatarFallback>
                  </Avatar>
                  <button 
                    className="absolute bottom-1 right-1 size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors"
                    aria-label="Edit profile picture"
                    data-testid="button-edit-avatar"
                  >
                    <Pencil className="size-4" />
                  </button>
                </div>
                <p className="font-medium text-foreground mb-1">Select Your Picture</p>
                <p className="text-sm text-muted-foreground">Accepted Image Files: JPEG, JPG, PNG</p>
                <p className="text-sm text-muted-foreground">Accepted Size: 300 × 300 (1MB)</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter first name" 
                      defaultValue="Student"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter last name" 
                      defaultValue="User"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter email address" 
                    defaultValue="student@vtu.ac.in"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter phone number" 
                    defaultValue="+91 9876543210"
                    data-testid="input-phone"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="college">College Name</Label>
                    <Select defaultValue="vtu-main">
                      <SelectTrigger id="college" data-testid="select-college">
                        <SelectValue placeholder="Select college" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vtu-main">VTU Main Campus</SelectItem>
                        <SelectItem value="rvce">RV College of Engineering</SelectItem>
                        <SelectItem value="msrit">MS Ramaiah Institute of Technology</SelectItem>
                        <SelectItem value="bnmit">BNM Institute of Technology</SelectItem>
                        <SelectItem value="pesit">PES Institute of Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Select defaultValue="cse">
                      <SelectTrigger id="branch" data-testid="select-branch">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                        <SelectItem value="ece">Electronics & Communication</SelectItem>
                        <SelectItem value="me">Mechanical Engineering</SelectItem>
                        <SelectItem value="cv">Civil Engineering</SelectItem>
                        <SelectItem value="eee">Electrical & Electronics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="batch">Batch</Label>
                    <Select defaultValue="2024">
                      <SelectTrigger id="batch" data-testid="select-batch">
                        <SelectValue placeholder="Select batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="usn">USN</Label>
                    <Input 
                      id="usn" 
                      placeholder="Enter USN" 
                      defaultValue="1VT21CS001"
                      data-testid="input-usn"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Write a short bio about yourself..." 
                    rows={4}
                    className="resize-none"
                    defaultValue="Passionate learner and aspiring software developer. Currently pursuing B.Tech in Computer Science at VTU."
                    data-testid="textarea-bio"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Gender</Label>
                  <RadioGroup 
                    value={gender} 
                    onValueChange={setGender}
                    className="flex flex-wrap gap-6"
                    data-testid="radio-gender"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="others" id="others" />
                      <Label htmlFor="others" className="font-normal cursor-pointer">Others</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto px-8"
                    data-testid="button-save-profile"
                  >
                    Save Profile Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
