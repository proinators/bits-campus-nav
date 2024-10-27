import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { X } from "lucide-react";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  SearchIcon,
  Logo,
} from "@/components/icons";

// Create a custom hook for managing search
export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const currentPath = router.pathname;
    if (query) {
      router.replace({
        pathname: currentPath,
        query: { search: query },
      }, undefined, { shallow: true });
    } else {
      router.replace(currentPath, undefined, { shallow: true });
    }
  };

  // Initialize search from URL on mount
  useEffect(() => {
    const query = router.query.search as string;
    if (query) {
      setSearchQuery(query);
    }
  }, [router.query.search]);

  return {
    searchQuery,
    setSearchQuery: handleSearch,
  };
};

export const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  
  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSearchOpen(false);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search places..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      isClearable={true}
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit ml-5">BITS Hyderabad - Campus Navigation</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        {/* <ThemeSwitch /> */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Button
          isIconOnly
          variant="light"
          onPress={() => setIsSearchOpen(!isSearchOpen)}
          className="lg:hidden"
        >
          <SearchIcon className="text-base text-default-500" />
        </Button>
        {/* <ThemeSwitch /> */}
      </NavbarContent>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div 
          className={`lg:hidden transition-transform duration-200 ease-in-out ${
            isSearchOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{
            position: 'fixed',
            top: '64px', // Adjust this value based on your navbar height
            left: 0,
            right: 0,
            zIndex: 40,
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border)',
            transform: isSearchOpen ? 'translateY(0)' : 'translateY(-100%)',
            visibility: isSearchOpen ? 'visible' : 'hidden',
          }}
        >
          <div className="flex items-center gap-2 p-4">
            {searchInput}
            <Button
              isIconOnly
              variant="light"
              onClick={handleCloseClick}
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </NextUINavbar>
  );
};