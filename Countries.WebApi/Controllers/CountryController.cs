using Countries.Dto;
using Countries.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Countries.WebApi.Controllers
{
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly ICountryService service;

        public CountryController(ICountryService service)
        {
            this.service = service;
        }

        [Route("countries")]
        [HttpGet]
        public async Task<IEnumerable<CountryDto>> GetCountries(CancellationToken token)
        {
            return await service.GetAll(token);
        }

        [Route("country/{countryId}/cities")]
        [HttpGet()]
        public async Task<IEnumerable<CityDto>> GetCitiesByCountry(Guid countryId, CancellationToken token)
        {
            return await service.GetAllCitiesByCountry(countryId, token);
        }
    }
}
