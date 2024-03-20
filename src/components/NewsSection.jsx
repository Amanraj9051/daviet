import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdEventNote } from "react-icons/md";
import main from "@/assets/uploads/2024/03/main.jpeg"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";


const NewsSection = () => {
  return (
    <div className="flex justify-center items-start border gap-20 py-8 flex-wrap m-5 rounded-xl bg-white shadow-lg">
      <div className=" flex flex-col items-center w-[50%] gap-4">
        <div className=" text-left  w-full text-4xl font-semibold flex gap-5">
          <h1 className="uppercase"><span className="text-blue-800">Latest</span> Events</h1>
          <MdEventNote className=" scale-150" />
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1 ">
            {Array.from({length: 10}).map((key)=>{
                return (
                    <CarouselItem key={key} className=" pl-1 md:basis-1/2 lg:basis-1/3">
                        <Card className='bg-[#f6f6fe] '>
                            <CardContent>
                                <div className=" mt-3">
                                    <img className=" rounded scale-125" src={main} alt="" />
                                </div>
                                <div className="flex gap-5 flex-col pt-5">
                                    <div className="text-sm font-bold">MAR 16,2024</div>

                                    <div className="font-bold text-xl">19th Convocation, Dr BR Ambedkar NIT Jalandhar (16th March 2024)</div>

                                    <div className="text-blue-600">Read More →</div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className=" h-[55vh]  flex flex-col items-center">
        <div className="uppercase text-left border w-full text-4xl font-semibold flex  gap-5 items-center">
            <h1 >News</h1>
            <HiOutlineNewspaper className=" scale-110"/>
        </div>

        <ScrollArea className=" w-80 rounded-md border">
          <div className="p-4 flex gap-2 flex-col">
            <Card>
                <CardContent>Advertisement for Recruitment to the Post of Deputy Registrar</CardContent>
            </Card>
            <Separator />
            <Card>
                <CardContent>Advertisement for Recruitment to the Post of Deputy Registrar</CardContent>
            </Card>
            <Separator />
            <Card>
                <CardContent>Advertisement for Recruitment to the Post of Deputy Registrar</CardContent>
            </Card>
            <Separator />
            <Card>
                <CardContent>Advertisement for Recruitment to the Post of Deputy Registrar</CardContent>
            </Card>
            <Separator />
            <Card>
                <CardContent>Advertisement for Recruitment to the Post of Deputy Registrar</CardContent>
            </Card>
            <Separator />
            <Card>
                <CardContent>Advertisement for Recruitment to the Post of Deputy Registrar</CardContent>
            </Card>
            <Separator />
            <Card>
                <CardContent>Advertisement for Recruitment to the Post of Deputy Registrar</CardContent>
            </Card>
            <Separator />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default NewsSection;
