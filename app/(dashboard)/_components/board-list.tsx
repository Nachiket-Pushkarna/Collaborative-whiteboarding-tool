"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavourite } from "./empty-favourites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgid: string;
    query: {
        search?: string;
        favourites?: string;
    }
}

export const BoardList = ({orgid,query}: BoardListProps) => {

    const data = [] //TODO Api call this;

    //If the user searches for a board that doesn't exist
    if(!data?.length && query?.search) {
        return (
            <EmptySearch />
        )
    }

    //If the user searches for a board that isn't favourited

    if(!data?.length && query?.favourites) {
        return (
           <EmptyFavourite />
        )
    }

    //If the user searches for a board that isn't there at all
    if(!data?.length) {
        return (
            <EmptyBoards />
        )
    }


return (
<div>
    {JSON.stringify(query)}
</div>
)

}