import React from "react";
import { Button, ButtonGroup} from "@chakra-ui/react";

const Pagination = ({ pageFilter, setPageFilter }) => {
  const { pageNumber, limit, totalCount } = pageFilter;

  const updatePageFilter = (change) => {
    setPageFilter({
      ...pageFilter,
      ...change,
    });
  };
  return (
    <ButtonGroup size="md" isAttached variant="outline" mt={12}>
      <Button
        disabled={pageNumber === 1}
        onClick={() => updatePageFilter({ pageNumber: pageNumber - 1 })}
        data-cy="pagination-previous-button"
      >
        Previous
      </Button>
      
      <Button
        disabled={pageNumber * limit > totalCount}
        onClick={() => updatePageFilter({ pageNumber: pageNumber + 1 })}
        data-cy="pagination-next-button"
      >
        Next
      </Button>
      
    </ButtonGroup>
  );
};

export default Pagination;
