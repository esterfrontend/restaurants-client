import UserHeader from "../ui/components/UserHeader/UserHeader";

export default function RestaurantsLayout({ children }) {
   return (
      <>
         <UserHeader/>
         <main>
            {children}
         </main>
      </>
   );
}
