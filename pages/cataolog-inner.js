import React from 'react'
import Link from 'next/link'
import Navbar from './navbar'
import Banner from '../Components/banner'

export default function catalog() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex items-start">
        <ul className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4" id="tabs-tabVertical"
          role="tablist">
          <li className="nav-item flex-grow text-center" role="presentation">
            <Link href="#tabs-homeVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        " id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
              aria-controls="tabs-homeVertical" aria-selected="true">CPC30620 Certificate III in Painting and Decorating</Link>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-profileVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-profileVertical" role="tab"
              aria-controls="tabs-profileVertical" aria-selected="false">CPC30220 Certificate III in Carpentry</a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-messagesVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
              aria-controls="tabs-messagesVertical" aria-selected="false">CPC31320 Certificate III in Wall and Floor Tiling</a>
          </li>

          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-messagesVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
              aria-controls="tabs-messagesVertical" aria-selected="false">CPC33020 Certificate III in Bricklaying and Blocklaying</a>
          </li>

          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-messagesVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
              aria-controls="tabs-messagesVertical" aria-selected="false">CCPC50220 Diploma of Building and Construction</a>
          </li>

          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-messagesVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
              aria-controls="tabs-messagesVertical" aria-selected="false">CPC40120 Certificate IV in Building and Construction</a>
          </li>

        </ul>
        <div className="tab-content" id="tabs-tabContentVertical">
          <div className="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
            aria-labelledby="tabs-home-tabVertical">
            <div>
              <h2 className="course-title">CPC30620 Certificate III in Painting and Decorating</h2>
              <h3>Core Units</h3>
              <div className='course-table'>
                <table class="table-auto">
                  <thead>
                    <tr>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody class="row-hover">
                    <tr class="row-2 even">
                      <td class="column-1">CPCCCM2012<br />
                        <small>Work safely at heights – PD (Available)</small></td>
                    </tr><tr class="row-3 odd">
                      <td class="column-1">CPCCCM3001<br />
                        <small>Operate elevated work platforms up to 11 metres – PD (Preorder)</small></td>
                    </tr><tr class="row-4 even">
                      <td class="column-1">CPCCCM3005<br />
                        <small>Calculate costs of construction work – PD (Available)</small></td>
                    </tr><tr class="row-5 odd">
                      <td class="column-1">CPCCOM1012<br />
                        <small>Work effectively and sustainably in the construction industry – PD (Available)</small></td>
                    </tr><tr class="row-6 even">
                      <td class="column-1">CPCCOM1013<br />
                        <small>Plan and organise work – PD (Available)</small></td>
                    </tr><tr class="row-7 odd">
                      <td class="column-1">CPCCOM1014<br />
                        <small>Conduct workplace communication – PD (Available)</small></td>
                    </tr><tr class="row-8 even">
                      <td class="column-1">CPCCCM2008<br />
                        <small>Erect and dismantle restricted height scaffolding – PD (Available)</small></td>
                    </tr><tr class="row-9 odd">
                      <td class="column-1">CPCCOM1015<br />
                        <small>Carry out measurements and calculations – PD (Available)</small></td>
                    </tr><tr class="row-10 even">
                      <td class="column-1">CPCCOM2001<br />
                        <small>Read and interpret plans and specifications – PD (Available)</small></td>
                    </tr><tr class="row-11 odd">
                      <td class="column-1">CPCCPB3026<br />
                        <small>Erect and maintain trestle and plank systems – PD (Preorder)</small></td>
                    </tr><tr class="row-12 even">
                      <td class="column-1">CPCCPD2011<br />
                        <small>PD Handle and store painting and decorating materials – PD</small></td>
                    </tr><tr class="row-13 odd">
                      <td class="column-1">CPCCPD2012<br />
                        <small>Use painting and decorating tools and equipment – PD (Available)</small></td>
                    </tr><tr class="row-14 even">
                      <td class="column-1">CPCCPD3021<br />
                        <small>PD Prepare existing coated surface for painting – PD</small></td>
                    </tr><tr class="row-15 odd">
                      <td class="column-1">CPCCPD3023<br />
                        <small>Apply texture coat paint finishes by brush, roller and spray – PD (Available)</small></td>
                    </tr><tr class="row-16 even">
                      <td class="column-1">CPCCPD3022<br />
                        <small>PD Apply paint by brush and roller – PD</small></td>
                    </tr><tr class="row-17 odd">
                      <td class="column-1">CPCCPD2013<br />
                        <small>Remove and replace doors and door and window components – PD (Available)</small></td>
                    </tr><tr class="row-18 even">
                      <td class="column-1">CPCCPD3024<br />
                        <small>Apply paint by spray – PD (Preorder)</small></td>
                    </tr><tr class="row-19 odd">
                      <td class="column-1">CPCCPD3025<br />
                        <small>Match specific paint colours – PD (Preorder)</small></td>
                    </tr><tr class="row-20 even">
                      <td class="column-1">CPCCPD3026<br />
                        <small>Apply stains and clear timber finishes – PD (Available)</small></td>
                    </tr><tr class="row-21 odd">
                      <td class="column-1">CPCCPD3027<br />
                        <small>Remove and apply wallpaper – PD (Preorder)</small></td>
                    </tr><tr class="row-22 even">
                      <td class="column-1">CPCCPD3028<br />
                        <small>Apply decorative paint finishes – PD (Available)</small></td>
                    </tr><tr class="row-23 odd">
                      <td class="column-1">CPCCPD3030<br />
                        <small>Apply protective paint coating systems – PD (Preorder)</small></td>
                    </tr><tr class="row-24 even">
                      <td class="column-1">CPCCPD3031<br />
                        <small>Work safely with leadpainted surfaces in the painting industry – PD (Preorder)</small></td>
                    </tr><tr class="row-25 odd">
                      <td class="column-1">CPCCPD3035<br />
                        <small>Prepare uncoated surfaces for painting – PD (Available)</small></td>
                    </tr><tr class="row-26 even">
                      <td class="column-1">CPCCPD3036<br />
                        <small>Work safely to encapsulate nonfriable asbestos in the painting industry – PD (Preorder)</small></td>
                    </tr><tr class="row-27 odd">
                      <td class="column-1">CPCCWHS2001<br />
                        <small>Apply WHS requirements, policies and procedures in the construction industry – PD (Available)</small></td>
                    </tr></tbody>


                </table>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
            Tab 2 content vertical
          </div>
          <div className="tab-pane fade" id="tabs-messagesVertical" role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical">
            Tab 3 content vertical
          </div>
        </div>
      </div>
    </div>
  )
}
