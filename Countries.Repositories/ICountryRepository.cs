using Countries.Db.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Countries.Repositories
{
    public interface ICountryRepository
    {
        Task<IEnumerable<Country>> GetAll(CancellationToken token);
    }
}