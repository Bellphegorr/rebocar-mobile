import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { Button } from "../../components/Button";
import { InputSearch } from "../../components/InputSearch";

import { 
    Container,
    Field,
    SearchResult,
    Footer
} from './styles';

interface Props {
    closeSearchModal: () => void;
}

export function SearchDestination({
    closeSearchModal
}: Props) {
    
    
    return(
        <Container>
            <Field>
                <InputSearch
                    placeholder="Para onde?"
                    autoCapitalize="sentences"
                    autoCorrect={false}
                />

                <SearchResult />
                <SearchResult />
                <SearchResult />
            </Field>

            <Footer>
                <Button 
                    title="Voltar"
                    onPress={closeSearchModal}
                />
            </Footer>
            
        </Container>
    )
}