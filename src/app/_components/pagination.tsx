"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { PageInfo } from "../[Category]/page";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const getVisiblePages = (currentPage: number) => {
  if (currentPage < 3) {
    return [1, 2, 3, 4, 5];
  }
  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
};

export const Paginations = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || 1;

  const onChangePage = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    const NewUrl = pathname + "?" + newSearchParams.toString();
    router.push(NewUrl);
  };
  const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages;
  const visiblePages = getVisiblePages(pageInfo.currentPage);
  let newArray = [];
  for (let i = Number(page) + 1; i < Number(page) + 10; i++) {
    newArray.push(i);
  }

  return (
    <div className="flex gap-5 m-10 cursor-pointer">
      {pageInfo.currentPage > 1 && (
        <div onClick={() => onChangePage(pageInfo.currentPage - 1)}>Prev</div>
      )}
      {visiblePages.map((page) => (
        <div
          onClick={() => onChangePage(page)}
          className={pageInfo.currentPage === page ? "font-semibold" : ""}
          key={page}
        >
          {page}
        </div>
      ))}
      ...
      <div onClick={() => onChangePage(lastPage)}>{lastPage}</div>
      {pageInfo.currentPage < lastPage && (
        <div onClick={() => onChangePage(pageInfo.currentPage + 1)}>Next</div>
      )}
    </div>
  );
};
