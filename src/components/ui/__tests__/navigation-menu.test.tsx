import { render, screen } from "@testing-library/react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../navigation-menu"

describe("NavigationMenu", () => {
  it("renders navigation menu with list", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
  })
})
