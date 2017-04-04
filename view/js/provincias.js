/*
 * This file is part of FacturaSctipts
 * Copyright (C) 2015-2016  Carlos Garcia Gomez  neorazorx@gmail.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var provincia_list = [
  
   {value: 'Guatemala'},
   {value: 'Petén'},
   {value: 'Huehuetenango'},
   {value: 'Quiché'},
   {value: 'Alta Verapaz'},
   {value: 'Izabal'},
   {value: 'San Marcos'},
   {value: 'Quetzaltenango'},
   {value: 'Totonicapán'},
   {value: 'Sololá'},
   {value: 'Chimaltenango'},
   {value: 'Sacatepéquez'},
   {value: 'Baja Verapaz'},
   {value: 'El Progreso'},
   {value: 'Jalapa'},
   {value: 'Zacapa'},
   {value: 'Chiquimula'},
   {value: 'Retalhuleu'},
   {value: 'Suchitepéquez'},
   {value: 'Escuintla'},
   {value: 'Santa Rosa'},
   {value: 'Jutiapa'},
   
];

$(document).ready(function() {
   $("#ac_provincia, #ac_provincia2").autocomplete({
      lookup: provincia_list,
   });
});
