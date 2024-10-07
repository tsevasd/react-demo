import React from 'react';
import { useParams } from 'react-router-dom';

export default function Show({t}) {

    const show = useParams();

  return (
        <div className="text-center border-2 border-primary-variant rounded-lg px-8 py-4 mb-4">
            This is show {show.showId}
        </div>
  );
}