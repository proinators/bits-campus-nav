import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody } from '@nextui-org/modal';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { ArrowRight } from 'lucide-react';
import DefaultLayout from '@/layouts/default';
import { title } from '@/components/primitives';
import { useSearch } from '@/components/navbar';
import { motion } from 'framer-motion';

const internalNavigationData = {
  "building1": {
    "mapImage": "/assets/building1-map.jpg",
    "pins": [
      { "coords": [100, 200], "name": "Room 101", "description": "Description for Room 101" },
      { "coords": [150, 250], "name": "Room 102", "description": "Description for Room 102" }
    ],
    "graph": {
      "Room 101": { "Room 102": 1 },
      "Room 102": { "Room 101": 1 }
    }
  }
};

export default function InternalNavigationPage() {
  const router = useRouter();
  const { building } = router.query;
  const [selectedPin, setSelectedPin] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const [filteredPins, setFilteredPins] = useState([]);

  useEffect(() => {
    if (building && internalNavigationData[building]) {
      setFilteredPins(internalNavigationData[building].pins);
    }
  }, [building]);

  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const filtered = internalNavigationData[building].pins.filter(pin =>
        pin.name.toLowerCase().includes(query) ||
        pin.description.toLowerCase().includes(query)
      );
      setFilteredPins(filtered);
    } else {
      setFilteredPins(internalNavigationData[building].pins);
    }
  }, [searchQuery, building]);

  const handlePinClick = (pin) => {
    setSelectedPin(pin);
    setIsModalOpen(true);
  };

  const handleNavigate = (pin) => {
    // Implement navigation logic here
  };

  if (!building || !internalNavigationData[building]) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <div className="relative">
        <div className="bg-background min-h-screen rounded-t-[2rem] rounded-b-[2rem] pb-16 mb-16">
          <div className="absolute top-0 left-0 right-0 h-16 bg-background rounded-t-[2rem] -translate-y-8" />
          
          <div className="container mx-auto px-6 pt-8">
            <h2 className={title({ size: 'sm', className: 'mb-10' })}>Internal Navigation</h2>
            
            <Input
              aria-label="Search"
              classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
              }}
              labelPlacement="outside"
              placeholder="Search pins..."
              startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              isClearable={true}
              onClear={() => setSearchQuery("")}
            />

            <div className="mt-10">
              <img
                src={internalNavigationData[building].mapImage}
                alt={`${building} map`}
                className="w-full h-auto object-cover"
              />
              {filteredPins.map((pin, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ top: pin.coords[1], left: pin.coords[0] }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handlePinClick(pin)}
                >
                  <div className="w-4 h-4 bg-red-500 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPin(null);
        }}
      >
        <ModalContent>
          {selectedPin && (
            <>
              <ModalHeader>
                <h3 className="text-xl font-bold">{selectedPin.name}</h3>
              </ModalHeader>
              <ModalBody>
                <p>{selectedPin.description}</p>
              </ModalBody>
              <ModalFooter className="flex justify-end">
                <Button 
                  color="primary"
                  onClick={() => handleNavigate(selectedPin)}
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
