import React, { useState } from "react";

import { Modal } from "react-native";

import {
  Container,
  Map,
  Footer
} from "./styles";

import { RequestButton } from "../../components/RequestButton";
import { SearchDestination } from "../SearchDestination";

export function Home() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  function handleOpenSearchDestination(){
    setSearchModalOpen(true);
  }

  function handleCloseSearchDestination(){
    setSearchModalOpen(false);
  }

  return (
    <Container>
      <Map />

      <Footer>
        <RequestButton
          title="Solicitar gincho"
          onPress={handleOpenSearchDestination}
        />
      </Footer>

      <Modal visible={searchModalOpen}>
        <SearchDestination 
          closeSearchModal={handleCloseSearchDestination}
        />
      </Modal>
    </Container>
  );
}
