
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
   <div className="
   bg-neutral-900
   rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
   ">
      <Header>
        <div>
          <div className="mb-2 text-white text-2xl font-semibold">
            Your Disaster Recovery Plans
            <h1 
              className="
                text-white
                text-3xl
                font-semibold
                "
            >
              <div className="
                  grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  xl:grid-cols-3 
                  2xl:grid-cols-4 
                  gap-3 
                  mt-4
                ">
                <ListItem 
                  image="/images/liked.jpeg"
                  name="DR Plan1"
                  href="liked"
                >
                </ListItem>

              </div>
            </h1>
          </div>
        </div>
      </Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Status
          </h1>
        </div>
        <div>
          Alerts
        </div>
      </div>
      
   </div>
   
  );
}
