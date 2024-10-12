import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from "../icons/all";

export default function Pagination({t, postsPerPage, length, currentPage, link}){

    const currentPageNumber = parseInt(currentPage);

    const paginationNumbers = [];
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumbers.push(i);
    }

    return(
        <div className="text-center py-3">
            {currentPageNumber !== 1 && 
                <Link
                    className="pl-2 pr-3 h-8 mr-1 text-sm bg-area/10 hover:bg-area/20 transition rounded-full inline-flex items-center"
                    to={link.replace('{0}', currentPageNumber-1)}
                >
                    <IconArrowRight iconClassName="w-4 h-4 mr-2 stroke-textcolor rotate-180"></IconArrowRight>
                    {t('previous')}
                </Link>
            }
            {paginationNumbers.map((pageNumber) => (
                <Link
                    className={`inline-flex items-center justify-center w-8 h-8 mx-1 transition rounded-full ${pageNumber === currentPageNumber ? 'bg-primary text-primary-variant-light' : 'bg-area/10 hover:bg-area/20'}`}
                    to={link.replace('{0}', pageNumber)}
                    key={pageNumber}
                >{pageNumber}</Link>
            ))}
            {currentPageNumber !== paginationNumbers.length &&
                <Link
                    className="pl-3 pr-2 h-8 ml-1 text-sm bg-area/10 hover:bg-area/20 transition rounded-full inline-flex items-center"
                    to={link.replace('{0}', currentPageNumber+1)}
                >
                    {t('next')}
                    <IconArrowRight iconClassName="w-4 h-4 ml-2 stroke-textcolor"></IconArrowRight>
                </Link>
            }
        </div>
    );
}