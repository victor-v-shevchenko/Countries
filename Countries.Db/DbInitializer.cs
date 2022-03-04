using Bogus;
using Countries.Db.Entities;
using System;
using System.Linq;

namespace Countries.Db
{
    public class DbInitializer
    {
        public static void Initialize(CountriesDbContext context)
        {
            if (context.Countries.Any())
            {
                return;
            }

            var countries = new Faker<Country>().RuleFor(e => e.Id, f => f.Random.Guid()).RuleFor(e => e.Name, f => f.Address.Country()).Generate(300).GroupBy(e => e.Name).Select(gr => gr.First()).ToList();

            context.Countries.AddRange(countries);
            context.SaveChanges();

            var rnd = new Random();

            foreach (var country in countries)
            {
                var cities = new Faker<City>().RuleFor(e => e.Id, f => f.Random.Guid()).RuleFor(e => e.CountryId, f => country.Id).RuleFor(e => e.Name, f => f.Address.City()).Generate(rnd.Next(50, 200));
                context.Cities.AddRange(cities);
                context.SaveChanges();
            }
        }
    }
}