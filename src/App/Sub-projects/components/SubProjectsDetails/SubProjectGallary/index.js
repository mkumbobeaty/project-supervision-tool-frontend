
import { Image } from 'antd';
import React from "react";
import Toolbar from '../Toolbar';
import './styles.css';

const imgUrls = [
  'https://source.unsplash.com/PC_lbSSxCZE/800x600', 'https://source.unsplash.com/lVmR1YaBGG4/800x600',
  'https://source.unsplash.com/5KvPQc1Uklk/800x600', 'https://source.unsplash.com/GtYFwFrFbMA/800x600',
  'https://source.unsplash.com/Igct8iZucFI/800x600', 'https://source.unsplash.com/M01DfkOqz7I/800x600',
  'https://source.unsplash.com/MoI_cHNcSK8/800x600', 'https://source.unsplash.com/M0WbGFRTXqU/800x600',
  'https://source.unsplash.com/s48nn4NtlZ4/800x600', 'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/F5Dxy9i8bxc/800x600', 'https://source.unsplash.com/iPum7Ket2jo/800x600'
];

export const ImageGallary = () => {
  return (
    <section className="ImageGallary container">
      <Toolbar
        total={imgUrls.length}
        itemName="PhotoGallary"
        onRefresh={() => console.log("clicked to refles")}
        exportUrl={true}
        onFilter={true}
        filterData="20/2/2020"
        filterFrom="Showing images from:"
        filterTo="To"
        actions={[
          {
            label: "Upload new photo",
            size: "large",
            title: "Upload New photo",
            // onClick: this.openSubProjectForm,
          },
        ]}
      />
      <Image.PreviewGroup>
        {
          imgUrls.map(url => {
            return (
              <Image
                width={300}
                src={url}
              />

            )
          })
        }

      </Image.PreviewGroup>
    </section>
  );
}

