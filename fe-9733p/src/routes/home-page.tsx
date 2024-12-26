import React from 'react'
import { Container } from 'react-bootstrap';

export default function HomePage() {
    return (
        <Container>
            <h1 className='text-center my-3'>FE-9733P Homework</h1>
            <h2 className='text-center my-3'>Kullanılan Teknolojiler</h2>
            <ul >
                <li>
                    Zustand
                </li>
                <li>
                    React router-dom
                </li>
                <li>
                    React Bootstrap
                </li>
            </ul>
            <h2 className='text-center my-3'>Amaç</h2>
            <p>Bu proje, React ile kullanıcı ve içerik yönetimi sağlamak amacıyla geliştirilmiş bir uygulamadır. Zustand ile durum yönetimi, React-Bootstrap ile modern ve duyarlı bir kullanıcı arayüzü tasarımı, React Router DOM ile ise sayfa yönlendirmeleri ve dinamik veri yükleme gibi işlevler gerçekleştirilmiştir. Projenin amacı, kullanıcıların içeriklere kolayca erişmesini, favori içeriklerini yönetebilmesini ve kullanıcı dostu bir deneyim sunmayı sağlamaktır.</p>
        </Container>
    );
}

