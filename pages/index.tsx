import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody } from '@nextui-org/modal';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Button } from '@nextui-org/button';
import { ArrowRight } from 'lucide-react';
import { Place, Places, siteConfig } from '@/config/site';
import DefaultLayout from '@/layouts/default';
import { title } from '@/components/primitives';
import { useSearch } from '@/components/navbar';

export default function IndexPage() {
  const [selectedPlace, setSelectedPlace] = useState<Place|null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { searchQuery } = useSearch();

  const filterPlaces = (places: typeof siteConfig.places) => {
    if (!searchQuery) return places;
  
    const query = searchQuery.toLowerCase();
    const filtered: Places = {};
  
    Object.entries(places).forEach(([heading, placesList]) => {
      const filteredPlaces = placesList.filter(
        place => 
          place.name.toLowerCase().includes(query) ||
          place.description.toLowerCase().includes(query)
      );
  
      if (filteredPlaces.length > 0) {
        filtered[heading] = filteredPlaces;
      }
    });
  
    return filtered;
  };

  const handleCardClick = (place: Place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  const handleNavigate = (location: string) => {
    window.open(location, '_blank');
  };

  const filteredPlaces = filterPlaces(siteConfig.places);

  return (
    <DefaultLayout>
      {/* Fixed Background */}
      <div className="fixed inset-0 z-[0]">
        <div 
          className="w-full h-full bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Banner Section */}
      <div className="h-[40vh] flex items-center justify-center">
        <h1 className={title({ color: "foreground" })}>
          {siteConfig.name}
        </h1>
      </div>

      {/* Main Content with Curved Top and Bottom */}
      <div className="relative">
        <div className="bg-background min-h-screen rounded-t-[2rem] rounded-b-[2rem] pb-16 mb-16">
          {/* Curved top decoration - keeping it for smoother top curve */}
          <div 
            className="absolute top-0 left-0 right-0 h-16 bg-background rounded-t-[2rem] -translate-y-8"
          />
          
          <div className="container mx-auto px-6 pt-8">
            {/* No results */}
            {Object.keys(filteredPlaces).length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-default-500">
                  No places found matching &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
            
            {/* Sections */}
            {Object.entries(filteredPlaces).map(([heading, places]) => (
              <section key={heading} className="mb-16">
                <h2 className={title({ size: 'sm', className: 'mb-10' })}>{heading}</h2>
                
                {/* Mobile: Horizontal Scroll */}
                <div className="md:hidden mt-10 md:mt-0">
                  <ScrollShadow orientation="horizontal" className="w-full">
                    <div className="flex gap-4 pb-4 overflow-x-auto">
                      {places.map((place) => (
                        <Card 
                          key={place.name}
                          isPressable
                          className="min-w-[300px]"
                          onClick={() => handleCardClick(place)}
                        >
                          <CardHeader className="p-0">
                            <img
                              src="/assets/placeholder.jpg"
                              alt={place.name}
                              className="w-full h-[200px] object-cover"
                            />
                          </CardHeader>
                          <CardBody>
                            <h3 className="text-lg font-semibold">{place.name}</h3>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </ScrollShadow>
                </div>

                {/* Desktop: Grid */}
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6 mt-0 md:mt-10">
                  {places.map((place) => (
                    <Card 
                      key={place.name}
                      isPressable
                      className="w-full"
                      onClick={() => handleCardClick(place)}
                    >
                      <CardHeader className="p-0">
                        <img
                          src="/assets/placeholder.jpg"
                          alt={place.name}
                          className="w-full h-[200px] object-cover"
                        />
                      </CardHeader>
                      <CardBody>
                        <h3 className="text-lg font-semibold">{place.name}</h3>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPlace(null);
        }}
      >
        <ModalContent>
          {selectedPlace && (
            <>
              <ModalHeader>
                <h3 className="text-xl font-bold">{selectedPlace.name}</h3>
              </ModalHeader>
              <ModalBody>
                <p>{selectedPlace.description}</p>
              </ModalBody>
              <ModalFooter className="flex justify-end">
                <Button 
                  color="primary"
                  onClick={() => handleNavigate(selectedPlace.location)}
                  className="gap-2"
                >
                  Navigate
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}