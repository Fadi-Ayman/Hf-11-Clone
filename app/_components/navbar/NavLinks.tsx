import CustomLink from "../CustomLink";

function NavLinks() {
  return (
    <div className=" gap-2 hidden md:flex items-center justify-center">
      
      <CustomLink hasIcon={false} href="/gallery" withTransition={true}>
        Gallery
      </CustomLink>

      <CustomLink hasIcon={false} href="#car-tour" withTransition={false}>
        Car Tour
      </CustomLink>

      <CustomLink hasIcon={false} href="#about" withTransition={false}>
        About
      </CustomLink>

      <CustomLink
        className="bg-black  text-white h-12  [border-bottom-right-radius:14px] w-fit "
        hasIcon={true}
        href="#ownership"
        withTransition={false}
        hoverColor="rgb(0 0 0 / 0.8)"
      >
        Ownership
      </CustomLink>
    </div>
  );
}

export default NavLinks;
