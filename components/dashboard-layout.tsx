"use client"
import { useEffect, useState } from "react";


import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarSeparator,
    SidebarTrigger
    



} from "@/components/ui/sidebar"


import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
  } from "@/components/ui/dropdown-menu"



  import {
 CreditCard,  LayoutDashboard, LogOut, Settings, Users
  } from "lucide-react"

  import {
    Avatar,
    AvatarImage,
    AvatarFallback

  } from "@/components/ui/avatar"

  import {Button} from "@/components/ui/button"

interface DashboardLayoutProps {
    children: React.ReactNode
  }


export default function DashboardLayout({children}: DashboardLayoutProps) {
    const [activePath, setActivePath] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
          setActivePath(window.location.pathname);
        }
      }, []);




      return (
        <SidebarProvider >
          <div className="flex min-h-screen bg-muted/40 w-full">
            <Sidebar className="shrink-0">
              <SidebarHeader className="border-b border-border">
                <div className="flex items-center gap-2 px-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div className="font-semibold">FinanceChain</div>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Main</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={activePath === "/dashboard"}>
                          <a href="/dashboard">
                            <LayoutDashboard />
                            <span>Dashboard</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupLabel>Settings</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <a href="/profile">
                            <Users />
                            <span>Profile</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings">
                            <Settings />
                            <span>Settings</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter className="border-t border-border p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=32&width=32&text=exmaple`} />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-sm">
                      <span className="font-medium">username</span>
                      <span className="text-xs text-muted-foreground">example@email.com</span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 hover:bg-gray-300"
                        
                    >
                        <Settings className="h-4 w-4"/>
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SidebarFooter>
            </Sidebar>
            <div className="flex-1">
              <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background px-4 md:px-6">
                <SidebarTrigger />
                <div className="flex flex-1 items-center justify-between">
                  <h1 className="text-xl font-semibold">Supply Chain Financing</h1>
                  <h1>Where Role Provider is </h1>
                </div>
              </header>
            <main className="flex-1 p-4 md:p-6">
              <div className="w-full">{children}</div> 
            </main>
            </div>
          </div>
        </SidebarProvider>
      )
}